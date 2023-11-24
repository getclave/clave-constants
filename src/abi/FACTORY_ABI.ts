/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
export const FACTORY_ABI = [
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '_proxyBytecodeHash',
                type: 'bytes32',
            },
            {
                internalType: 'address',
                name: 'implementation',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [],
        name: 'DEPLOYMENT_FAILED',
        type: 'error',
    },
    {
        inputs: [],
        name: 'INITIALIZATION_FAILED',
        type: 'error',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'accountAddress',
                type: 'address',
            },
        ],
        name: 'NewClaveAccount',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'salt',
                type: 'bytes32',
            },
            {
                internalType: 'bytes',
                name: 'initializer',
                type: 'bytes',
            },
        ],
        name: 'deployAccount',
        outputs: [
            {
                internalType: 'address',
                name: 'accountAddress',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'salt',
                type: 'bytes32',
            },
        ],
        name: 'getAddressForSalt',
        outputs: [
            {
                internalType: 'address',
                name: 'accountAddress',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getImplementation',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'proxyBytecodeHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
