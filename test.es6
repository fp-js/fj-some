import assert from 'assert';
import some from './';


it('fj-some', () => {
  assert.equal(some(elem => elem > 10,[2, 5, 8, 1, 4]),false);
});
