import './style.css'

import Renderer from './Singletons/Renderer';
import EntityManager from './Singletons/EntityManager';
import LevelManager from './Singletons/LevelManager';
import GamePhysics from './Singletons/GamePhysics';

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

