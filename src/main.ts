import './style.css'

import Renderer from './Managers/Renderer';
import EntityManager from './Managers/EntityManager';
import LevelManager from './Managers/LevelManager';
import GamePhysics from './Managers/GamePhysics';

const entityManager = new EntityManager();

const renderer = new Renderer('app', entityManager);
const levelManager = new LevelManager(entityManager);
const gamePhysics = new GamePhysics(entityManager);

levelManager.loadLevel();

setInterval(() => {
    gamePhysics.tick();
    renderer.render();
}, 10)

