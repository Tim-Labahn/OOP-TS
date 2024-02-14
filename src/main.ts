import './style.css'

import Renderer from './Renderer';
import EntityManager from './EntityManager';
import LevelManager from './LevelManager';
import GamePhysics from './GamePhysics';

const renderer = Renderer.getInstance();
renderer.setRenderingElement('app');

const entityManager = EntityManager.getInstance();

renderer.setEntityManager(entityManager);

const levelManager = LevelManager.getInstance();
levelManager.setEntityManager(entityManager);

levelManager.loadLevel();

const gamePhysics = GamePhysics.getInstance();
gamePhysics.setEntityManager(entityManager);

setInterval(() => {
    gamePhysics.tick();
    renderer.render();
}, 10)

