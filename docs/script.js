
    // Функция для отображения сообщения пользователю
    function showMessage(text, type) {
        const statusDiv = document.getElementById('form-status');
        if (!statusDiv) return;
        statusDiv.textContent = text;
        statusDiv.style.color = type === 'success' ? 'green' : 'red';
        statusDiv.style.fontWeight = '500';
        // Автоматически скрыть через 5 секунд
        setTimeout(() => {
            statusDiv.textContent = '';
        }, 5000);
    }

    // Находим форму по ID
    const form = document.getElementById('booking-form');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Отменяем перезагрузку страницы
            
            const formData = new FormData(form);
            
            try {
                const response = await fetch('https://formspree.io/f/mvzdryyv', {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });
                
                if (response.ok) {
                    showMessage('✅ Бронирование отправлено! Мы свяжемся с вами.', 'success');
                    form.reset(); // Очищаем форму
                } else {
                    const errorData = await response.json();
                    showMessage(`❌ Ошибка: ${errorData.error || 'попробуйте позже'}`, 'error');
                }
            } catch (error) {
                showMessage('❌ Ошибка сети. Проверьте соединение.', 'error');
            }
        });
    }
