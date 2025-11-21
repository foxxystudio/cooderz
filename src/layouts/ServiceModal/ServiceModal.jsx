'use client';
import React from 'react';
import './style.scss';

export default function ServiceModal({ ref, data, isActive, setIsActive }) {
   console.log(isActive);

   return (
      <div ref={ref} className='service-modal-layer__wrapper'>
         {/* Gradient */}
         <div className="gradient__layer" onClick={() => setIsActive(false)}>
         </div>

         {/* Close Btn */}
         <div className="close__button" onClick={() => setIsActive(false)}>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
         </div>

         {/* Modal */}
         <div className="service-modal__wrapper">
            <div className="content__wrapper">
               <h2 className='font-primary-600 font-white'>Custom Tools & Automations</h2>
               <p>
                  Need something specific for your token? We build bots, scripts, and dapps that automate and simplify your workflow.<br /> <br />

                  From idea to on-chain logic built clean, secure, and optimized.<br /><br />

                  We build smart contracts that form the backbone of your Web3 project. Whether you’re launching a token, NFT collection, or a complex protocol, we write contracts aligned with your roadmap. <br /><br />

                  What we build:<br /><br />
                  ✅ ERC-20, ERC-721, ERC-1155, SPL, and more<br />
                  ✅ Minting contracts with access control and metadata logic<br />
                  ✅ Bonding curve or liquidity-backed supply contracts<br />
                  ✅ Proxy and upgradeable contracts with modular architecture<br />
                  ✅ Tokenomics logic for vesting, burning, rebasing, or rewards<br /><br />

                  What you get:<br /><br />

                  Verified source code on Etherscan or explorer<br />
                  Audit-friendly code with full test coverage<br />
                  Deployment scripts and transfer of ownership/keys<br /><br />

                  Whether you're launching a simple meme coin or a fully-fledged protocol, we build the contracts that make it possible.
               </p>
            </div>
         </div>
      </div>
   )
}
