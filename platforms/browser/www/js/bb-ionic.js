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

async function handleButtonClick() {
    const loading = await loadingController.create({
        message: 'Loading...',
        duration: 3000
    });

    await loading.present();
}

const segments = document.querySelectorAll('ion-segment')
for (let i = 0; i < segments.length; i++) {
    segments[i].addEventListener('ionChange', (ev) => {
        alert('Segment changed to ' + ev.detail.value);
    })
}

async function showToast(message, color = "dark") {
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