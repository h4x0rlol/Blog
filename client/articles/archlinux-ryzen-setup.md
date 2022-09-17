# Setting up Ryzen CPUs on Arch Linux (and others)

### I have been using Linux distros for a several years, starting to use the OS on an old AMD processor I had no problems, but when I moved to a newer generation (Zen), some problems have began. Relying on some [sources](https://www.reddit.com/r/ManjaroLinux/comments/i9oktd/ryzen_7_2700_unstable_voltage_and_temp/ "sources") and my personal experience, zen processors behave differently than on Windows. Another behavior is expressed in a constant change in CPU Voltage and, as a result, the acceleration of the cooler and the increase noise of the PC. Also on Linux systems it can be quite problematic to view the correct values of the CPU Voltage and cooler speed (at least it was on my motherboard). In this article I will try to provide solutions to the problems mentioned above. The instructions below will work for Arch family distros, but can also be used for any Linux distro using its own package manager and features.

### My setup is Ryzen 2700 on Gigabyte AX370M-DS3H, CPU cooling is DEEPCOOL GAMMAXX 400.

---

## Detect sensors (Arch distros):

### To detect all sensors on your motherboard with lm-sensors do this steps:

##### (Tried on Gigabyte x370, but also works on B250/Z370/B450M and on ASUS motherboards | [arch wiki](https://wiki.archlinux.org/index.php/Lm_sensors#Gigabyte_B250/Z370/B450M_motherboards "arch wiki"))

##### (information from arch wiki and [there](https://askubuntu.com/questions/1164206/lm-sensors-and-amd-ryzen-x570-chipset "there"))

### 1. `sudo vim /etc/default/grub` or open it with your editor

### 2. Find this line `GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"` and add to it this

`acpi_enforce_resources=lax`

### It will looks like this now `GRUB_CMDLINE_LINUX_DEFAULT="quiet splash acpi_enforce_resources=lax"`

### 3. Save and exit your editor, then run `sudo update-grub`

### 4. Reboot your pc

### 5. Now run `git clone https://github.com/h4x0rlol/archlinux-ryzen-setup.git`

### 6. `cd archlinux-ryzen-setup`

### 7. Run `./setup.sh` (press enter and type yes when it asks)

### 8. Now run `sudo modprobe it87 force_id=0x8686` or `sudo modprobe it87 force_id=0x8628` ([8628](https://github.com/a1wong/it87/issues/1 "8628"))

### 9. Now run `sudo sensors-detect` and press enter everytime

### 10. `sensors` and `zenmonitor` now should show actual temps and voltage

---

## To fix noisy cpu fan and random type freezes:

### 1. Turn off Core Performance Boost in BIOS
