import { useState, useEffect } from 'react';
import axios from 'axios';
import { ethers } from 'ethers';
import './App.css';

function App() {
  const [account, setAccount] = useState('');
  const [internId, setInternId] = useState('');
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Form states
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', walletAddress: '' });
  const [taskForm, setTaskForm] = useState({ description: '' });

  // Connect to MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setMessage('Wallet connected successfully!');
      } catch (error) {
        setMessage('Failed to connect wallet: ' + error.message);
      }
    } else {
      setMessage('MetaMask not detected. Please install MetaMask.');
    }
  };

  // Register Intern
  const registerIntern = async () => {
    if (!registerForm.name || !registerForm.email || !registerForm.walletAddress) {
      setMessage('Please fill all fields');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/intern/register', registerForm);
      setInternId(response.data.intern._id);
      setMessage('Intern registered successfully!');
    } catch (error) {
      setMessage('Registration failed: ' + error.response?.data?.error || error.message);
    }
    setLoading(false);
  };

  // Submit Task
  const submitTask = async () => {
    if (!taskForm.description || !internId) {
      setMessage('Please enter task description and register first');
      return;
    }
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/task/submit', {
        internId,
        taskDescription: taskForm.description
      });
      setMessage('Task submitted successfully!');
    } catch (error) {
      setMessage('Task submission failed: ' + error.response?.data?.error || error.message);
    }
    setLoading(false);
  };

  // Mint NFT
  const mintNFT = async () => {
    if (!internId) {
      setMessage('Please register first');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/token/mint-nft', {
        internId,
        tokenURI: `https://example.com/nft/${internId}` // Replace with actual URI
      });
      setMessage('NFT minted successfully! TX: ' + response.data.transactionHash);
      fetchNFTs(); // Refresh NFTs
    } catch (error) {
      setMessage('Minting failed: ' + error.response?.data?.error || error.message);
    }
    setLoading(false);
  };

  // Fetch NFTs
  const fetchNFTs = async () => {
    if (!internId) return;
    try {
      const response = await axios.get(`http://localhost:5000/api/intern/profile/${internId}`);
      setNfts(response.data.nftsOwned || []);
    } catch (error) {
      console.error('Failed to fetch NFTs:', error);
    }
  };

  useEffect(() => {
    if (internId) {
      fetchNFTs();
    }
  }, [internId]);

  return (
    <div className="App">
      <h1>NFT Certificate Issuer DApp</h1>

      {!account ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <p>Connected: {account}</p>
      )}

      <div className="section">
        <h2>Register Intern</h2>
        <input
          type="text"
          placeholder="Name"
          value={registerForm.name}
          onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={registerForm.email}
          onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Wallet Address"
          value={registerForm.walletAddress}
          onChange={(e) => setRegisterForm({ ...registerForm, walletAddress: e.target.value })}
        />
        <button onClick={registerIntern} disabled={loading}>Register</button>
      </div>

      <div className="section">
        <h2>Submit Task</h2>
        <input
          type="text"
          placeholder="Task Description"
          value={taskForm.description}
          onChange={(e) => setTaskForm({ ...taskForm, description: e.target.value })}
        />
        <button onClick={submitTask} disabled={loading || !internId}>Submit Task</button>
      </div>

      <div className="section">
        <h2>Mint NFT Certificate</h2>
        <button onClick={mintNFT} disabled={loading || !internId}>Mint NFT</button>
      </div>

      <div className="section">
        <h2>Your NFTs</h2>
        {nfts.length === 0 ? (
          <p>No NFTs yet</p>
        ) : (
          <ul>
            {nfts.map((nft) => (
              <li key={nft._id}>
                Token ID: {nft.tokenId}, Contract: {nft.contractAddress}
              </li>
            ))}
          </ul>
        )}
      </div>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
