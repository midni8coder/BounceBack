let currentModal = null;
async function createModal(componentName = 'modal-content') {
    const modal = await modalController.create({
        component: componentName
    });

    await modal.present();
    currentModal = modal;
}
async function createModalWithHeader(header, componentName = 'dynamic-modal-content') {
    if (!customElements.get('dynamic-modal-content'))
        prepareContent(header);
    const modal = await modalController.create({
        component: componentName
    });

    await modal.present();
    currentModal = modal;
}

function dismissModal() {
    if (currentModal) {
        currentModal.dismiss().then(() => { currentModal = null; });
    }
}

async function handleButtonClick(message) {
    const loading = await loadingController.create({
        message: message ? message : 'Loading...'
         ,duration: 3000
    });

    await loading.present();
    app.globalLoader = loading;
}

const segments = document.querySelectorAll('ion-segment')
for (let i = 0; i < segments.length; i++) {
    segments[i].addEventListener('ionChange', (ev) => {
        alert('Segment changed to ' + ev.detail.value);
    })
}

async function showToast(message, color = "primary") {
    const toast = await toastController.create({
        color: color,
        duration: 2000,
        message: message,
        showCloseButton: true
        // ,buttons: [
        //     {
        //         side: 'start',
        //         icon: 'star',
        //         text: 'Favorite',
        //         handler: () => {
        //             alert('Favorite clicked');
        //         }
        //     }, {
        //         text: 'Done',
        //         role: 'cancel',
        //         handler: () => {
        //             alert('Cancel clicked');
        //         }
        //     }
        // ]
    });

    await toast.present();
}

let length = 0;
const list = document.getElementById('list');
const infiniteScroll = document.getElementById('scroll-live-stories');

infiniteScroll.addEventListener('ionInfinite', async function () {
    //   alert('load more...');
    if (true) {//length < users.length
        // handleButtonClick('Loading More Stories...');
        //await wait(500);

        app.appendItems(10);
        infiniteScroll.complete();
        console.log('Done');
    } else {
        console.log('No More Data');
        infiniteScroll.disabled = true;
    }
});