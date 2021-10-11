var validation = {status: true, message: ''};

export default {
  /***
   * validation email input
   */
  validateEmail: (email) => {
    if(email === '') {
      validation.status = false;
      validation.message = 'Preencha o campo de e-mail corretamente!';
    } else {
      if(email.indexOf('@') > -1) {
          let value = email.split('@');

          if(value[1].indexOf('.') > -1) {
              let value2 = value[1].split(".");

              if(value2[1].length > 1) {
                validation.status = true;
                validation.message = '';
              } else {
                validation.status = false;
                validation.message = 'Campo de e-mail invalido!';
              }
          } else {
            validation.status = false;
            validation.message = 'Campo de e-mail invalido!';
          }
      } else {
        validation.status = false;
        validation.message = 'Campo de e-mail invalido!';
      }
    }

    return validation;
  },
  /***
   * validation phone input
   */
  validatePhone: (phone) => {
    const validRegex = /^\([1-9]{2}\) [9]{0,1}[6-9]{1}[0-9]{3}\-[0-9]{4}$/;

    if(validRegex.test(phone)){
      validation.status = true;
      validation.message = '';
    } else {
      validation.status = false;
      validation.message = 'Preencha o campo de telefone corretamente!';
    }

    return validation;
  },
  /***
   * validation name input
   */
  validateName: (name) => {
    if(name === '') {
      validation.status = false;
      validation.message = 'Preencha o campo de nome corretamente!';
    } else {
      validation.status = true;
      validation.message = '';
    }

    return validation;
  },
  /***
   * validation cpf input
   */
  validateCpf: (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    // Eliminates known invalid CPFs    
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"){
        
        validation.status = false;
        validation.message = 'Preencha o campo de cpf corretamente!';
        return validation;
    }
    // Validate 1st digit
    var add = 0;
    var i;
    var rev;
    for (i = 0; i < 9; i++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(9))){
      validation.status = false;
      validation.message = 'Preencha o campo de cpf corretamente!';
      return validation;
    }
    // Validate 2st digit
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10))){
      validation.status = false;
      validation.message = 'Preencha o campo de cpf corretamente!';
      return validation;
    }

    validation.status = true;
    validation.message = 'Campo preenchido corretamente!';

    return validation;
  },
  /***
   * validation password input
   */
  validatePassword: (password) => {
    if(password === '') {
			validation.status = false;
			validation.message = 'Senha é Obrigatoria';
		} else {
			if(password.length < 6) {
				validation.status = false;
				validation.message = 'Senha é muito curta (mínimo: 6 caracteres)';
			} else {
				validation.status = true;
				validation.message = '';
			}
		}

    return validation;
  },
  /***
   * validation confirm password input
   */
  validateConfirmPassword: (password, confirmPassword) => {
    var validation2 = {status: true, message: ''};

    if(password != '') {
			if(confirmPassword != password) {
				validation2.status = false;
				validation2.message = 'A Senha e a Confirmação de senha devem ser iguais';
			} else {
        validation2.status = true;
				validation2.message = '';
      }
		}

    return validation2;
  }

}