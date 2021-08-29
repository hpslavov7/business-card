var lorem = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.';

var isMobileDevice = Utils.checkDevice();

if (isMobileDevice) {
    MobileDevice.run();
} else {
    DesktopDevice.run();
}