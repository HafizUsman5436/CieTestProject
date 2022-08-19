class TMDB{
  elements = {
    //Main Locators
    chooseMovie: () => cy.contains('[placeholder="TopGun:Maverick"]'),
    addToFavoriteBtn: () => cy.contains('[class="FavoriteBtn"]'),
    favoritesTab: () => cy.contains('[class="Favorite_movies_list"]'),
    //Other Locators
    movieTitle: () => cy.contains('[placeholder="TopGun:Maverick"]'),
    favoriteslist:() => cy.contains('[class="Favorites_list"]'),
    //Popup Locators
    favoriteConfirmation: () => cy.contains('[class="Confirmation_Popup"]')
  }
}
module.exports = new TMDB();
