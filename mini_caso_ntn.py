import math
import json
import numpy as np

C = 299792458.0
EARTH_RADIUS_KM = 6371.0
ALTITUDE_KM = 600.0


def slant_range_km(elev_deg: float, altitude_km: float = ALTITUDE_KM) -> float:
    e = math.radians(elev_deg)
    return math.sqrt((EARTH_RADIUS_KM + altitude_km) ** 2 - (EARTH_RADIUS_KM * math.cos(e)) ** 2) - EARTH_RADIUS_KM * math.sin(e)


def fspl_db(freq_ghz: float, distance_km: float) -> float:
    return 92.45 + 20 * math.log10(freq_ghz) + 20 * math.log10(distance_km)


def doppler_hz(freq_ghz: float, elev_deg: float, orbital_speed_m_s: float = 7560.0) -> float:
    radial = orbital_speed_m_s * math.cos(math.radians(elev_deg))
    return (radial / C) * (freq_ghz * 1e9)


def evaluate_case(freq_ghz: float, eirp_dbm: float, grx_dbi: float, losses_db: float, bw_mhz: float, nf_db: float, req_snr_db: float):
    data = []
    for elev in range(10, 85, 5):
        d = slant_range_km(elev)
        fspl = fspl_db(freq_ghz, d)
        prx = eirp_dbm + grx_dbi - fspl - losses_db
        noise = -174 + 10 * math.log10(bw_mhz * 1e6) + nf_db
        snr = prx - noise
        margin = snr - req_snr_db
        data.append({
            'elevation_deg': elev,
            'distance_km': round(d, 2),
            'fspl_db': round(fspl, 2),
            'prx_dbm': round(prx, 2),
            'snr_db': round(snr, 2),
            'margin_db': round(margin, 2),
            'doppler_hz': round(doppler_hz(freq_ghz, elev), 1),
        })
    return data


if __name__ == '__main__':
    cases = {
        'S-band IoT (2 GHz)': evaluate_case(2.0, 43.0, 15.0, 3.0, 1.0, 3.0, 2.0),
        'Ka-band feeder (20 GHz)': evaluate_case(20.0, 58.0, 35.0, 5.0, 20.0, 4.0, 6.0),
    }
    print(json.dumps(cases, indent=2, ensure_ascii=False))
