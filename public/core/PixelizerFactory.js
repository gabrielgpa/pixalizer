import PixelizerBuilder from './PixelizerBuilderFactory.js';

export default function Pixelizer(image, scale, canvas) {
    function handler() {
        const pixelizerBuilder = PixelizerBuilder(image, scale, canvas);
        
        pixelizerBuilder.handler();
    }

    return {
        handler
    };

}