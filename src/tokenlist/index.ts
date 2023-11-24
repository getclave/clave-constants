/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
import { type ClaveToken } from '@getclave/core';

export const CLAVE_TOKEN_LIST: Array<ClaveToken> = [
    {
        symbol: 'ETH',
        name: 'Ether',
        decimals: 18,
        address: '0x000000000000000000000000000000000000800a',
        icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
        type: 'native',
    },
    {
        symbol: 'zkWEN',
        name: 'zkWEN Token',
        decimals: 18,
        address: '0x7313Ce6a2E264BE949a6F47fAfc44A94C4B62244',
        icon: 'https://clave-assets.s3.eu-central-1.amazonaws.com/wen.png',
        type: 'ERC20',
    },
    {
        symbol: 'USDC',
        name: 'USD Coin',
        decimals: 6,
        address: '0x0faf6df7054946141266420b43783387a78d82a9',
        icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
        type: 'ERC20',
    },
    {
        symbol: 'DAI',
        name: 'DAI Stablecoin',
        decimals: 18,
        address: '0x3e7676937a7e96cfb7616f255b9ad9ff47363d4b',
        icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
        type: 'ERC20',
    },
].map((token) => {
    return {
        ...token,
        address: token.address.toLowerCase(),
    } as ClaveToken;
});
