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
});
