export default function PixelizerBuilder(image, scale, canvas) {
    function handler() {
        validate();

        const dimensions = configDimensions();

        configContext(
            dimensions.canvas, 
            dimensions.scaledWidth, 
            dimensions.scaledHeight
        );
    }

    function configDimensions() {
        scale *= 0.01;
        canvas.width = image.width;
        canvas.height = image.height;

        let scaledWidth = canvas.width * scale;
        let scaledHeight = canvas.height * scale;

        return {
            canvas,
            scaledWidth,
            scaledHeight
        }
    }

    function validate() {
        if (!image || !image.src) {
            throw 'error-image';
        }

        if (!scale || ~~scale < 0) {
            throw 'error-scale';
        }
    }

    function configContext(customCanvas, scaledWidth, scaledHeight) {
        let context = customCanvas.getContext('2d');

        context.mozImageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;

        context.drawImage(image, 0, 0, scaledWidth, scaledHeight);
        context.drawImage(customCanvas, 0, 0, scaledWidth, scaledHeight, 0, 0, image.width, image.height);

        return context;
    }

    return {
        handler
    };
}