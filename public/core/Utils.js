export default function Utils() {
    function renderFile(event, window) {

        return new Promise((resolve, reject) => {
            let tgt = event.target || window.event.srcElement,
            files = tgt.files;

            if (FileReader && files && files.length) {
                let fr = new FileReader();

                fr.onload = function () {
                    resolve(fr.result);
                }

                fr.readAsDataURL(files[0]);
            } else {
                reject('error-render');
            }
        });
    }

    return {
        renderFile
    };
}