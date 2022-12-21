const Pet = require('../src/pet.js');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
      const pet = new Pet('Fido');
  
      expect(pet.name).toEqual('Fido');
    });
    
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });

    it('has a initial hunger of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.hunger).toEqual(0);
    });

    describe('growUp', () => {
      it('increments the age by 1', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.age).toEqual(1);
      });

      it('increments the hunger by 5', () => {
       const pet = new Pet('Fido');

        pet.growUp();
    
        expect(pet.hunger).toEqual(5);
      });

      it('decreases the fitness level by 3', () => {
        const pet = new Pet('Fido');
        
        pet.growUp();
    
        expect(pet.fitness).toEqual(7);
      });
      
    });

    describe('walk', () => {
      it('increases fitness by 4', () => {
        const pet = new Pet('fido');
    
        pet.fitness = 4;
        pet.walk();
    
        expect(pet.fitness).toEqual(8);
      });

      it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
    
        pet.fitness = 8;
        pet.walk();
    
        expect(pet.fitness).toEqual(10);
      });
    });
    
    describe('Feed' , () => {
      it('Decreases hunger level by 3', () => {
        const pet = new Pet('fido');
    
        pet.hunger= 7;
        pet.feed();

        expect(pet.hunger).toEqual(4);
      });

      it('Decreases hunger level by 3 until 0 ', () => {
        const pet = new Pet('fido');
    
        pet.hunger= 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
      });


    });
    

  });