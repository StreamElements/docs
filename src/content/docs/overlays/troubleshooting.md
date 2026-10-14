---
title: Troubleshooting
description: "Fix overlays not appearing in OBS, stuttering, missing sound, and XSplit compatibility issues."
keywords:
  - StreamElements overlay troubleshooting
  - overlay not showing OBS
  - overlay stuttering
  - XSplit overlay not working
---

## Overlay not appearing

- Check the browser source resolution matches your overlay — usually **1920x1080**.
- Try toggling **Browser Source Hardware Acceleration** (OBS: **Settings > Advanced**) — enable it if it's off, or disable it if it's on.
- Re-copy the overlay URL and re-paste it into the source's Properties: open [My Overlays](https://streamelements.com/dashboard/overlays), open the overlay's menu, click **Copy URL**, then paste it into the browser source's Properties in OBS.
- Confirm alerts aren't muted or paused in your Activity Feed.

## Overlay stuttering

Usually the same fixes as above — try toggling hardware acceleration first, then confirm the source resolution and FPS match your stream settings.

## No sound from alerts

See the Audio Issues section of [SE.Live Troubleshooting](/selive/troubleshooting) — the same browser-source audio setup applies whether or not you use SE.Live.

## XSplit

Overlays require a recent Chromium Embedded Framework (CEF) version. If overlays fail to load in XSplit:

- Update to **XSplit 4.5.2306.2701 or newer**, which ships with an up-to-date CEF, or
- Update the CEF package manually if you can't upgrade XSplit yet.

If neither resolves it, [contact support](https://streamelements.com/contact).

## Still stuck?

[Reach out to our support team](https://support.streamelements.com/hc/en-us/requests/new) for further help.
