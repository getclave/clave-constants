/**
 * Copyright Clave - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

type AddressKey =
    | 'MULTICALL3'
    | 'VALIDATOR_ADDRESS'
    | 'BATCH_CALLER'
    | 'IMPLEMENTATION'
    | 'REGISTRY'
    | 'FACTORY'
    | 'MOCK_VALIDATOR'
    | 'TEE_VALIDATOR'
    | 'SOCIAL_RECOVERY'
    | 'CLOUD_RECOVERY'
    | 'GASLESS_PAYMASTER'
    | 'ERC20_PAYMASTER';

export const CONSTANT_ADDRESSES: Record<AddressKey, string> = {
    MULTICALL3: '0xF9cda624FBC7e059355ce98a31693d299FACd963',
    VALIDATOR_ADDRESS: '0x8c6C58671F35B38bc1917E34eb270F1DcCBD4F62',
    BATCH_CALLER: '0x50061A2D430271929BEF85F964E540aFE07BfD36',
    IMPLEMENTATION: '0xE222582D101A741cAA7b7Ab177db74834E385fA0',
    REGISTRY: '0x48E579F257De378d862585B07756130b548D5401',
    FACTORY: '0xB3012Fa06A38fF057030D81171B9Ee76A12A1b88',
    MOCK_VALIDATOR: '0x379f41Ab03B8e62A91aF1695fd70796ef51D4cfa',
    TEE_VALIDATOR: '0x8c6C58671F35B38bc1917E34eb270F1DcCBD4F62',
    SOCIAL_RECOVERY: '0xd305c62FA57a1FBE123637a11d2bB690f61CB32b',
    CLOUD_RECOVERY: '0x21b57bcB7a5C54b1b764bd20295a96156950a975',
    GASLESS_PAYMASTER: '0xBC954Ff3B0a1a4A6Ac5Dbc820adef3AFC4d0d8c1',
    ERC20_PAYMASTER: '0xFd7d78Ba90EebCD987124e0f73082F815b0bd408',
};
