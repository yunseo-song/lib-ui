function joinform_check() {
    //변수에 담아주기
    var uid = document.getElementById("userId");
    var pwd = document.getElementById("password");
    var repwd = document.getElementById("rePassword");
    var uname = document.getElementById("userName");
    var female = document.getElementById("female");
    var male = document.getElementById("male");
    var mobile = document.getElementById("phonenumber");
    var email_id = document.getElementById("email");
  
    if (uid.value == "") { 
      alert("아이디를 입력하세요.");
      uid.focus(); 
      return false;
    };
  
    if (pwd.value == "") {
      alert("비밀번호를 입력하세요.");
      pwd.focus();
      return false;
    };
  
    var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  
    if (!pwdCheck.test(pwd.value)) {
      alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.");
      pwd.focus();
      return false;
    };
  
    if (repwd.value !== pwd.value) {
      alert("비밀번호가 일치하지 않습니다..");
      repwd.focus();
      return false;
    };
  
    if (uname.value == "") {
      alert("이름을 입력하세요.");
      uname.focus();
      return false;
    };
  
    if (!female.checked && !male.checked) {
      alert("성별을 선택해 주세요.");
      female.focus();
      return false;
    }
  
    var reg = /^[0-9]+/g; 
  
    if (!reg.test(mobile.value)) {
      alert("전화번호는 숫자만 입력할 수 있습니다.");
      mobile.focus();
      return false;
    }
  
    if (email_id.value == "") {
      alert("이메일 주소를 입력하세요.");
      email_id.focus();
      return false;
    }
  
    if (!agree.checked) {
      alert("약관 동의를 체크하세요.");
      agree.focus();
      return false;
    }

    document.getElementById("registerForm").submit();
  }

function id_check() {

}
    
