form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
        const response = await fetch('https://formspree.io/f/mvzdryyv', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
            showMessage('Успешно отправлено!', 'success');
            form.reset();
        } else {
            showMessage('Ошибка', 'error');
        }
    } catch (error) {
        showMessage('Ошибка сети', 'error');
    }
});