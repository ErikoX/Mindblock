const sandart = extend(Block, "artificial-sand", {
    canPlaceOn(tile, team) {
	    return (tile != null && (tile.floor()).liquidDrop != null);
    }
})

sandart.buildType = () => extend(Building, {

    updateTile() {
        this.tile.setFloor(Blocks.sand);
        this.tile.setAir();
        Vars.renderer.blocks.floor.clearTiles();
    }
    
})
