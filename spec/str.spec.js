describe("str", function () {
  var index = require('./index.js');

  it("trim", function () {
      expect(index.trim('ab', 'a')).toEqual('b');
      expect(index.trim('/', '/')).toEqual('');
  });

  it("empty", function () {
  });
/*  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });*/
});
