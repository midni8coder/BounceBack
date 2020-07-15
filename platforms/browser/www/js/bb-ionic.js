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

