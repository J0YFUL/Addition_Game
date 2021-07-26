import Caver from "caver-js";
<<<<<<< HEAD
import {Spinner} from 'spin.js';
=======
import {Spinner} from "spin.js";
>>>>>>> fc3ba5251101edc2c7ad80f08cc3b970c9dc3789

const config = {
  rpcURL: 'https://api.baobab.klaytn.net:8651'
}
const cav = new Caver(config.rpcURL);
const agContract = new cav.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS);

const App = {
  auth: {
    accessType: 'keystore',
    keystore: '',
    password: ''
  },

  start: async function () {
    const walletFromSession = sessionStorage.getItem('walletInstance');
    if (walletFromSession) {
      try {
        cav.klay.accounts.wallet.add(JSON.parse(walletFromSession));
        this.changeUI(JSON.parse(walletFromSession));
<<<<<<< HEAD
      } catch (e) {      
=======
      } catch (e) {
>>>>>>> fc3ba5251101edc2c7ad80f08cc3b970c9dc3789
        sessionStorage.removeItem('walletInstance');
      }
    }
  },

  handleImport: async function () {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0]);
    fileReader.onload = (event) => {      
      try {     
        if (!this.checkValidKeystore(event.target.result)) {
          $('#message').text('유효하지 않은 keystore 파일입니다.');
          return;
        }    
        this.auth.keystore = event.target.result;
        $('#message').text('keystore 통과. 비밀번호를 입력하세요.');
        document.querySelector('#input-password').focus();    
      } catch (event) {
        $('#message').text('유효하지 않은 keystore 파일입니다.');
        return;
      }
    }   
  },

  handlePassword: async function () {
    this.auth.password = event.target.value;
  },

  handleLogin: async function () {
<<<<<<< HEAD
    if (this.auth.accessType === 'keystore') { 
      try {
        const privateKey = cav.klay.accounts.decrypt(this.auth.keystore, this.auth.password).privateKey;
        this.integrateWallet(privateKey);
      } catch (e) {      
        $('#message').text('비밀번호가 일치하지 않습니다.');
      }
=======
    if (this.auth.accessType === 'keystore') {
      try {
        const privateKey = cav.klay.accounts.decrypt(this.auth.keystore, this.auth.password).privateKey;
        this.integrateWallet(privateKey);
      } catch(e) {
        $('#message').text('비밀번호가 일치하지 않습니다.');
      } 
>>>>>>> fc3ba5251101edc2c7ad80f08cc3b970c9dc3789
    }
  },

  handleLogout: async function () {
    this.removeWallet();
    location.reload();
  },

<<<<<<< HEAD
  generateNumbers: async function () {    
    var num1 = Math.floor((Math.random() * 50) + 10);
    var num2 = Math.floor((Math.random() * 50) + 10);
    sessionStorage.setItem('result', num1 + num2);    
=======
  generateNumbers: async function () {
    var num1 = Math.floor(Math.random() * 50) + 10; // 0 ~ 49 까지의 값 , Math.floor <= 소숫점 버리게
    var num2 = Math.floor(Math.random() * 50) + 10; // 0 ~ 49 까지의 값 , Math.floor <= 소숫점 버리게
    sessionStorage.setItem('result', num1 + num2);
>>>>>>> fc3ba5251101edc2c7ad80f08cc3b970c9dc3789

    $('#start').hide();
    $('#num1').text(num1);
    $('#num2').text(num2);
<<<<<<< HEAD
    $('#question').show(); 
    document.querySelector('#answer').focus();
    
=======
    $('#question').show();
    document.querySelector('#answer').focus();

>>>>>>> fc3ba5251101edc2c7ad80f08cc3b970c9dc3789
    this.showTimer();
  },

  submitAnswer: async function () {
    const result = sessionStorage.getItem('result');
<<<<<<< HEAD
    var answer = $('#answer').val();  

    if (answer === result) {
      if (confirm("대단하네요^^ 0.1 KLAY 받기")) {
        if (await this.callContractBalance() >= 0.1) {         
          this.receiveKlay();
        } else {
          alert("죄송합니다. 컨트랙의 KLAY가 다 소모되었습니다.");
        }       
      }
    } else {
      alert("땡! 초등학생도 하는데 ㅠㅠ");
=======
    var answer = $('#answer').val();
    if(answer === result) {
      if (confirm("정답입니다!! (0.1 KLAY 보상)")) {
        if (await this.callContractBalance() >= 0.1) { // 잔액확인 함수로 받아옴. 비교
          this.receiveKlay();
        } else {
          alert("KLAY가 부족하여 보상을 제공받지 못했습니다..");
        }
      }
    } else {
      alert("틀려버렸고..");
>>>>>>> fc3ba5251101edc2c7ad80f08cc3b970c9dc3789
    }
  },

  deposit: async function () {
    var spinner = this.showSpinner();
    const walletInstance = this.getWallet();
<<<<<<< HEAD

    if (walletInstance) {
      if (await this.callOwner() !== walletInstance.address) return; 
=======
    if (walletInstance) {
      if((await this.callOwner()).toUpperCase() !== walletInstance.address.toUpperCase()) return; // 다르면 바로 리턴
>>>>>>> fc3ba5251101edc2c7ad80f08cc3b970c9dc3789
      else {
        var amount = $('#amount').val();
        if (amount) {
          agContract.methods.deposit().send({
            from: walletInstance.address,
            gas: '250000',
            value: cav.utils.toPeb(amount, "KLAY")
<<<<<<< HEAD
          })        
          .once('transactionHash', (txHash) => {
            console.log(`txHash: ${txHash}`);
          })
          .once('receipt', (receipt) => {
            console.log(`(#${receipt.blockNumber})`, receipt); //Received receipt! It means your transaction(calling plus function) is in klaytn block                          
            spinner.stop();  
            alert(amount + " KLAY를 컨트랙에 송금했습니다.");               
            location.reload();      
          })
          .once('error', (error) => {
            alert(error.message);
          }); 
        }
        return;    
=======
          }).then(spinner.stop())
          .then(alert(amount + " KLAY를 컨트랙트에 송금했습니다."))
          .then(location.reload());
          // .once('transactionHash', (txHash) => {
          //   console.log(`txHash: ${txHash}`);
          // })
          // .once('receipt', (receipt) => {
          //   console.log(`(#${receipt.blockNumber})`, receipt);
          //   spinner.stop();
          //   alert(amount + " KLAY를 컨트랙트에 송금했습니다.");
          //   location.reload();
          // })
          // .once('error', (error) => {
          //   alert(error.message);
          // });
        }
        return;
>>>>>>> fc3ba5251101edc2c7ad80f08cc3b970c9dc3789
      }
    }
  },

  callOwner: async function () {
    return await agContract.methods.owner().call();
  },

  callContractBalance: async function () {
    return await agContract.methods.getBalance().call();
  },

  getWallet: function () {
    if (cav.klay.accounts.wallet.length) {
      return cav.klay.accounts.wallet[0];
    }
  },

  checkValidKeystore: function (keystore) {
    const parsedKeystore = JSON.parse(keystore);
    const isValidKeystore = parsedKeystore.version &&
      parsedKeystore.id &&
      parsedKeystore.address &&
      parsedKeystore.keyring;  

    return isValidKeystore;
  },

  integrateWallet: function (privateKey) {
    const walletInstance = cav.klay.accounts.privateKeyToAccount(privateKey);
<<<<<<< HEAD
    cav.klay.accounts.wallet.add(walletInstance)
    sessionStorage.setItem('walletInstance', JSON.stringify(walletInstance));
    this.changeUI(walletInstance);  
=======
    cav.klay.accounts.wallet.add(walletInstance);
    sessionStorage.setItem('walletInstance', JSON.stringify(walletInstance));
    this.changeUI(walletInstance);
>>>>>>> fc3ba5251101edc2c7ad80f08cc3b970c9dc3789
  },

  reset: function () {
    this.auth = {
<<<<<<< HEAD
      keystore: '',
      password: ''
=======
      keystore : '',
      password : '' 
>>>>>>> fc3ba5251101edc2c7ad80f08cc3b970c9dc3789
    };
  },

  changeUI: async function (walletInstance) {
    $('#loginModal').modal('hide');
<<<<<<< HEAD
    $("#login").hide(); 
    $('#logout').show();
    $('#game').show();
    $('#address').append('<br>' + '<p>' + '내 계정 주소: ' + walletInstance.address + '</p>');   
    $('#contractBalance').append('<p>' + '이벤트 잔액: ' + cav.utils.fromPeb(await this.callContractBalance(), "KLAY") + ' KLAY' + '</p>');     

    if (await this.callOwner() === walletInstance.address) {
      $("#owner").show(); 
    }     
=======
    $('#login').hide();
    $('#logout').show();
    $('#game').show();
    $('#address').append('<br>' + '<p>' + '내 계정 주소 : ' + walletInstance.address + '</p>');
    $('#contractBalance')
    .append('<p>' + '이벤트 잔액 : ' + cav.utils.fromPeb(await this.callContractBalance(), "KLAY") + ' KLAY'+'</p>');

    if((await this.callOwner()).toUpperCase() === walletInstance.address.toUpperCase()) {
      $('#owner').show();
    }
>>>>>>> fc3ba5251101edc2c7ad80f08cc3b970c9dc3789
  },

  removeWallet: function () {
    cav.klay.accounts.wallet.clear();
    sessionStorage.removeItem('walletInstance');
    this.reset();
  },

  showTimer: function () {
<<<<<<< HEAD
    var seconds = 3;
    $('#timer').text(seconds);
    var interval = setInterval(function() {  
      $('#timer').text(--seconds);  
      if (seconds <= 0) {
        $('#timer').text('');
        $('#answer').val('');
        $('#question').hide();
        $('#start').show();          
        clearInterval(interval);
      }     
=======
    var seconds = 2;
    $('#timer').text(seconds);

    var interval = setInterval(() => {
      $('#timer').text(--seconds);
      if(seconds <= 0) {
        $('#timer').text('');
        $('#answer').val('');
        $('#question').hide();
        $('#start').show();
        clearInterval(interval);
      }
>>>>>>> fc3ba5251101edc2c7ad80f08cc3b970c9dc3789
    }, 1000);
  },

  showSpinner: function () {
<<<<<<< HEAD
    var target = document.getElementById('spin');
    return new Spinner(opts).spin(target);
  },

  receiveKlay: function() {
    var spinner = this.showSpinner();
    const walletInstance = this.getWallet();

    if (!walletInstance) return;  

    agContract.methods.transfer(cav.utils.toPeb("0.1", "KLAY")).send({
      from: walletInstance.address,
      gas: '250000'
    }).then(function (receipt) {
      if (receipt.status) {
        spinner.stop();  
        alert("0.1 KLAY가 " + walletInstance.address + " 계정으로 지급되었습니다.");      
        $('#transaction').html("");
        $('#transaction').append(`<p><a href='https://baobab.klaytnscope.com/tx/${receipt.txHash}' target='_blank'>클레이튼 Scope에서 트랜젝션 확인</a></p>`);
        return agContract.methods.getBalance().call()
          .then(function (balance) {
            $('#contractBalance').html("");
            $('#contractBalance').append('<p>' + '이벤트 잔액: ' + cav.utils.fromPeb(balance, "KLAY") + ' KLAY' + '</p>');           
        });        
      }
    });      
  }  
=======
    var target = document.getElementById("spin");
    return new Spinner(opts).spin(target);
  },

  receiveKlay: function () {
    var spinner = this.showSpinner();
    const walletInstance = this.getWallet();

    if (!walletInstance) return;

    agContract.methods.transfer(cav.utils.toPeb("0.1","KLAY")).send({
      from : walletInstance.address, 
      gas : '250000' // value 필드는 payable 함수가 아니라서 안넣음, 넘기지 않음.
    }).then(function (receipt) {
      if (receipt.status) {
        spinner.stop();
        alert("0.1 KLAY가 " + walletInstance.address + " 계정으로 전송되었습니다.");
        $('#transaction').html("");
        $('#transaction')
        .append(`<p><a href='https://baobab.klaytnscope.com/tx/${receipt.transactionHash}'
                    target='_blank'>클레이튼 scope에서 트랜잭션 확인</a></p>`);
        return agContract.methods.getBalance().call()
        .then(function (balance) {
          $('#contractBalance').html("");
          $('#contractBalance')
          .append('<p>' + '이벤트 잔액 : ' + cav.utils.fromPeb(balance, "KLAY") + ' KLAY' + '</p>');
        })
      }
    })
  }
>>>>>>> fc3ba5251101edc2c7ad80f08cc3b970c9dc3789
};

window.App = App;

window.addEventListener("load", function () { 
  App.start();
});

var opts = {
  lines: 10, // The number of lines to draw
  length: 30, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  color: '#5bc0de', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  className: 'spinner', // The CSS class to assign to the spinner
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  position: 'absolute' // Element positioning
};