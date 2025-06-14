async function connectWalletAndLogin() {
  if (typeof window.ethereum === 'undefined') {
    alert("Please install MetaMask to continue.");
    return;
  }

  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const wallet = accounts[0];

    // Send wallet to backend for login
    const res = await fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ wallet }),
    });

    const data = await res.json();
    alert("Logged in as " + wallet);
    window.location.href = '/profile'; // Redirect to profile
  } catch (err) {
    console.error(err);
    alert("Wallet connection failed.");
  }
}

// Auto-connect if session exists
window.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch('/auth/session');
  const session = await res.json();
  if (!session.loggedIn) {
    await connectWalletAndLogin();
  }
});
