import Block from './block';

describe('Block', () => {
    let timestamp;
    let previousBlock;
    let data;
    let hash;


    beforeEach(() =>{

        timestamp = new Date(2010, 0, 1);
        previousBlock = Block.genesis;
        data = 'transaction0';
        hash = 'hash0';

    });

    it('Crear instancia con parametros', () => {
        const block = new Block(timestamp, previousBlock.hash, hash, data);
        
        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);

    });

    it('Uando static mine', () =>{

        const block = Block.mine(previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(data).toEqual(data);

    });

    it('Usando static hash', () =>{
        
        hash = Block.hash(timestamp, previousBlock.hash, data);
        const hasOutput = "17e5af59d29d2e7affbf5f315f911cac32244eea2a50fc3bbe9ea57493d7bc84";

        expect(hash).toEqual(hasOutput);

    });

    it('Usando toString', () =>{

        const block = Block.mine(previousBlock, data);

        expect(typeof block.toString()).toEqual('string');

    });

});

