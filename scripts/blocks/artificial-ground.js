const groundart = extend(Block, "artificial-ground", {
    canPlaceOn(tile, team) {
	    return (tile != null && (tile.floor()).liquidDrop != null);
    }
})

groundart.buildType = () => extend(Building, {

    updateTile() {
        this.tile.setFloor(Blocks.metalFloor);
        this.tile.setAir();
        Vars.renderer.blocks.floor.clearTiles();
    }
    
})
