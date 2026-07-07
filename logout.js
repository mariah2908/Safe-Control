// logout.js
document.addEventListener('DOMContentLoaded', function() {
    function getPanelType() {
        // tenta encontrar o identificador no header
        const small = document.querySelector('header .info small');
        if (small && /admin/i.test(small.textContent)) return 'admin';
        if (small && /funcion/i.test(small.textContent)) return 'funcionario';
        // fallback: título da página
        if (/Painel do Funcionário/i.test(document.title)) return 'funcionario';
        if (/Painel Admin/i.test(document.title)) return 'admin';
        return null;
    }

    const panel = getPanelType();
    const btns = document.querySelectorAll('.btn-sair');
    btns.forEach(btn => btn.addEventListener('click', function() {
        const msg = 'Tem certeza que deseja sair?';
        if (!confirm(msg)) return;
        try { sessionStorage.clear(); localStorage.clear(); } catch(e) {}
        if (panel === 'admin') {
            window.location.href = 'autenticacaoadm.html';
        } else if (panel === 'funcionario') {
            window.location.href = 'autenticacaof.html';
        } else {
            // generic fallback
            window.location.href = 'index.html';
        }
    }));

    function isFormComplete(form) {
        const fields = form.querySelectorAll('input, select, textarea');
        for (const field of fields) {
            if (field.disabled) continue;
            const tag = field.tagName.toLowerCase();
            const type = field.type;
            if (tag === 'input') {
                if (['submit', 'button', 'reset', 'hidden', 'file', 'image'].includes(type)) continue;
                if (['checkbox', 'radio'].includes(type)) continue;
            }
            const value = field.value.trim();
            if (!value) {
                return false;
            }
        }
        return true;
    }

    function addClearButtonBehavior(form) {
        const clearButton = Array.from(form.querySelectorAll('button[type="button"].btn-cancelar'))
            .find(btn => btn.textContent.trim().toLowerCase() === 'limpar');
        if (!clearButton) return;

        clearButton.addEventListener('click', function() {
            const fields = form.querySelectorAll('input, select, textarea');
            fields.forEach(field => {
                if (field.disabled) return;
                const tag = field.tagName.toLowerCase();
                const type = field.type;
                if (tag === 'input') {
                    if (['submit', 'button', 'reset', 'hidden', 'file', 'image'].includes(type)) return;
                    if (['checkbox', 'radio'].includes(type)) {
                        field.checked = false;
                        return;
                    }
                }
                field.value = '';
            });
        });
    }

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        addClearButtonBehavior(form);
        form.addEventListener('submit', function(event) {
            if (!isFormComplete(form)) {
                event.preventDefault();
                alert('Por favor, preencha todos os campos.');
                return;
            }
            alert('Cadastrado com sucesso');
        });
    });
});
