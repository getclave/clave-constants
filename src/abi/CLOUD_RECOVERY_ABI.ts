/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
export const CLOUD_RECOVERY_ABI = [
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'recoveringAddress',
                        type: 'address',
                    },
                    {
                        internalType: 'bytes',
                        name: 'newOwner',
                        type: 'bytes',
                    },
                    {
                        internalType: 'uint256',
                        name: 'nonce',
                        type: 'uint256',
                    },
                ],
                internalType: 'struct BaseRecovery.RecoveryData',
                name: 'recoveryData',
                type: 'tuple',
            },
        ],
        name: 'getEip712Hash',
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
    {
        inputs: [
            {
                internalType: 'string',
                name: 'name',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'version',
                type: 'string',
            },
            {
                internalType: 'uint256',
                name: 'timelock',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [],
        name: 'ALREADY_INITED',
        type: 'error',
    },
    {
        inputs: [],
        name: 'INVALID_GUARDIAN_SIGNATURE',
        type: 'error',
    },
    {
        inputs: [],
        name: 'INVALID_RECOVERY_NONCE',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InvalidShortString',
        type: 'error',
    },
    {
        inputs: [],
        name: 'RECOVERY_IN_PROGRESS',
        type: 'error',
    },
    {
        inputs: [],
        name: 'RECOVERY_NOT_INITED',
        type: 'error',
    },
    {
        inputs: [],
        name: 'RECOVERY_NOT_STARTED',
        type: 'error',
    },
    {
        inputs: [],
        name: 'RECOVERY_TIMELOCK',
        type: 'error',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'str',
                type: 'string',
            },
        ],
        name: 'StringTooLong',
        type: 'error',
    },
    {
        inputs: [],
        name: 'ZERO_ADDRESS_GUARDIAN',
        type: 'error',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'Disabled',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [],
        name: 'EIP712DomainChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'Inited',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'newOwner',
                type: 'bytes',
            },
        ],
        name: 'RecoveryExecuted',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'newOwner',
                type: 'bytes',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'timelockExpiry',
                type: 'uint256',
            },
        ],
        name: 'RecoveryStarted',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'RecoveryStopped',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'guardian',
                type: 'address',
            },
        ],
        name: 'UpdateGuardian',
        type: 'event',
    },
    {
        inputs: [],
        name: 'TIMELOCK',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'getGuardian',
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
        name: 'disable',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
            {
                internalType: 'bytes1',
                name: 'fields',
                type: 'bytes1',
            },
            {
                internalType: 'string',
                name: 'name',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'version',
                type: 'string',
            },
            {
                internalType: 'uint256',
                name: 'chainId',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: 'verifyingContract',
                type: 'address',
            },
            {
                internalType: 'bytes32',
                name: 'salt',
                type: 'bytes32',
            },
            {
                internalType: 'uint256[]',
                name: 'extensions',
                type: 'uint256[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'recoveringAddress',
                type: 'address',
            },
        ],
        name: 'executeRecovery',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'initData',
                type: 'bytes',
            },
        ],
        name: 'init',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'isInited',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'isRecovering',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'recoveryDataTypeHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'recoveryNonces',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'recoveryStates',
        outputs: [
            {
                internalType: 'uint256',
                name: 'timelockExpiry',
                type: 'uint256',
            },
            {
                internalType: 'bytes',
                name: 'newOwner',
                type: 'bytes',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: 'address',
                        name: 'recoveringAddress',
                        type: 'address',
                    },
                    {
                        internalType: 'bytes',
                        name: 'newOwner',
                        type: 'bytes',
                    },
                    {
                        internalType: 'uint256',
                        name: 'nonce',
                        type: 'uint256',
                    },
                ],
                internalType: 'struct BaseRecovery.RecoveryData',
                name: 'recoveryData',
                type: 'tuple',
            },
            {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
            },
        ],
        name: 'startRecovery',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'stopRecovery',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceId',
                type: 'bytes4',
            },
        ],
        name: 'supportsInterface',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'guardian',
                type: 'address',
            },
        ],
        name: 'updateGuardian',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
