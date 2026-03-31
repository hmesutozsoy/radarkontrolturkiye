#!/usr/bin/env python3
"""
Fetch all speed camera / radar locations in Turkey from OpenStreetMap.
Run this on your Mac: python3 fetch_radars.py
It outputs radar_data.json ready to embed in the app.

Data source: OpenStreetMap (ODbL license)
Attribution required: © OpenStreetMap contributors
"""

import json
import urllib.request
import sys

OVERPASS_URL = "https://overpass-api.de/api/interpreter"

QUERY = """
[out:json][timeout:120];
// Turkey bounding box: south 36, west 26, north 42, east 45
(
  node["highway"="speed_camera"](36.0,26.0,42.0,45.0);
  node["enforcement"="maxspeed"](36.0,26.0,42.0,45.0);
  node["device"="speed_camera"](36.0,26.0,42.0,45.0);
);
out body;
"""

def fetch():
    print("🔍 Fetching speed camera data from OpenStreetMap...")
    print("   This may take 30-60 seconds...\n")

    data = urllib.parse.urlencode({"data": QUERY}).encode()
    req = urllib.request.Request(OVERPASS_URL, data=data)
    req.add_header("User-Agent", "RadarHaritasi/1.0")

    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            result = json.loads(resp.read().decode())
    except Exception as e:
        print(f"❌ Error: {e}")
        print("   Try again in a minute (Overpass has rate limits)")
        sys.exit(1)

    elements = result.get("elements", [])
    print(f"✅ Found {len(elements)} speed camera nodes\n")

    # Process into clean format
    cameras = []
    for el in elements:
        cam = {
            "id": el["id"],
            "lat": el["lat"],
            "lng": el["lon"],
            "type": "radar",  # default
            "maxspeed": None,
            "direction": None,
        }

        tags = el.get("tags", {})

        # Determine type
        if tags.get("enforcement") == "maxspeed" or tags.get("highway") == "speed_camera":
            cam["type"] = "radar"
        if "average_speed" in str(tags):
            cam["type"] = "corridor"

        # Speed limit
        ms = tags.get("maxspeed")
        if ms:
            try:
                cam["maxspeed"] = int(ms.replace(" km/h", "").strip())
            except:
                cam["maxspeed"] = ms

        # Direction
        cam["direction"] = tags.get("direction")

        # Additional info
        cam["ref"] = tags.get("ref", "")
        cam["description"] = tags.get("description", "")

        cameras.append(cam)

    # Sort by latitude (north to south)
    cameras.sort(key=lambda c: -c["lat"])

    # Output
    output = {
        "source": "OpenStreetMap",
        "license": "ODbL - © OpenStreetMap contributors",
        "fetched_at": __import__("datetime").datetime.now().isoformat(),
        "count": len(cameras),
        "cameras": cameras
    }

    with open("radar_data.json", "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"📁 Saved to radar_data.json ({len(cameras)} cameras)")
    print(f"\n📊 Summary:")

    # Stats
    types = {}
    for c in cameras:
        types[c["type"]] = types.get(c["type"], 0) + 1
    for t, count in types.items():
        print(f"   {t}: {count}")

    speeds = [c["maxspeed"] for c in cameras if isinstance(c["maxspeed"], int)]
    if speeds:
        print(f"   Speed limits: {min(speeds)}-{max(speeds)} km/h")

    # Also output as JS constant for direct embedding
    js_cameras = json.dumps(cameras, ensure_ascii=False)
    with open("radar_data.js", "w", encoding="utf-8") as f:
        f.write(f"// Auto-generated from OpenStreetMap - {len(cameras)} cameras\n")
        f.write(f"// © OpenStreetMap contributors (ODbL)\n")
        f.write(f"// Generated: {__import__('datetime').datetime.now().isoformat()}\n")
        f.write(f"const RADAR_DATA = {js_cameras};\n")

    print(f"\n📁 Also saved radar_data.js (embed directly in index.html)")
    print(f"\n✨ Done! Copy RADAR_DATA into your app's index.html")

if __name__ == "__main__":
    fetch()
