import china from '../data/benderaheader/China.png'
import jerman from '../data/benderaheader/Germany.png'
import india from '../data/benderaheader/India.png'
import indonesia from '../data/benderaheader/Indonesia (7).png'
import philipina from '../data/benderaheader/Philippines.png'
import singapore from '../data/benderaheader/Singapore.png'
import taiwan from '../data/benderaheader/Taiwan Flag.png'

const flags = [
    { name: 'China', image: china, limitUser: 100, userActive: 85, status: 'Active' },
    { name: 'Germany', image: jerman, limitUser: 150, userActive: 120, status: 'Active' },
    { name: 'India', image: india, limitUser: 200, userActive: 180, status: 'Active' },
    { name: 'Indonesia', image: indonesia, limitUser: 250, userActive: 220, status: 'Active' },
    { name: 'Philippines', image: philipina, limitUser: 180, userActive: 160, status: 'Active' },
    { name: 'Singapore', image: singapore, limitUser: 120, userActive: 90, status: 'Active' },
    { name: 'Taiwan', image: taiwan, limitUser: 80, userActive: 60, status: 'Active' },
  ];
  
  export default flags;