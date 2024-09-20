## Running on a Physical Device

To run the app on a physical Android device connected to your development machine, follow these steps:

1. **Connect Your Device**: Use a USB cable to connect your Android device to your computer.

2. **Enable USB Debugging**: Ensure USB debugging is enabled in your device's Developer Options.

3. **Open a Terminal**: Open a terminal on your computer.

4. **Run ADB Reverse**:
   ```bash
   adb reverse tcp:8081 tcp:8081
