/* Conexão BR - máscaras do formulário, data máxima e filtro de projetos */
(function () {
    "use strict";

    /* ---------- Máscaras ---------- */
    const digitos = (v) => v.replace(/\D/g, "");

    function cpf(v) {
        const d = digitos(v).slice(0, 11);
        return d
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    function telefone(v) {
        const d = digitos(v).slice(0, 11);
        if (d.length === 0) return "";
        if (d.length <= 2) return "(" + d;
        if (d.length <= 6) return "(" + d.slice(0, 2) + ") " + d.slice(2);
        if (d.length <= 10) return "(" + d.slice(0, 2) + ") " + d.slice(2, 6) + "-" + d.slice(6);
        return "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
    }

    function cep(v) {
        const d = digitos(v).slice(0, 8);
        return d.length > 5 ? d.slice(0, 5) + "-" + d.slice(5) : d;
    }

    function aplicarMascara(id, fn) {
        const campo = document.getElementById(id);
        if (!campo) return;
        campo.addEventListener("input", () => { campo.value = fn(campo.value); });
    }

    aplicarMascara("cpf", cpf);
    aplicarMascara("telefone", telefone);
    aplicarMascara("cep", cep);
})();
