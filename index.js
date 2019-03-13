var imageSource = require("image-source");

exports.getImage = function(view) {
	if (view.ios) {
		let layer = args.ios.keyWindow.layer;
		let scale = UIScreen.main.scale;
		UIGraphicsBeginImageContextWithOptions(layer.frame.size, false, scale);
		layer.renderInContext(UIGraphicsGetCurrentContext());
		screenshotImage = UIGraphicsGetImageFromCurrentImageContext();
		UIGraphicsEndImageContext();
		return screenshotImage;
	} else if (view.android) {
		view.android.setDrawingCacheEnabled(true);
		var bmp = android.graphics.Bitmap.createBitmap(view.android.getDrawingCache());
		view.android.setDrawingCacheEnabled(false);
		var source = new imageSource.ImageSource();
		source.setNativeSource(bmp);
		return source;
	}
	return undefined;
};
