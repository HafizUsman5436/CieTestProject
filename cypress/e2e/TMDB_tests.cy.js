/// <reference types="cypress" />
import TMDB from "../support/Page_Objects/TMDB_locators";

describe("Testing TMDB Application", () => {
  before("Login", () => {
    cy.visit(
      "https://tmdb.testproject.com" //dummy url
    );
  });
  context("Add to Favorites", () => {
    it("Verify, Add to Favorites functionality", () => {
      TMDB.elements.chooseMovie().scrollIntoView().click(); //using scrollIntoView method to click on the movie name which is not visible on the screen
      TMDB.elements.movieTitle().should('be.visible'); // verifying if the movie title is visible
      TMDB.elements.addToFavoriteBtn().click();//clicking on add to favorites button
      TMDB.elements.favoriteConfirmation().click();//handling confirmation popup
      TMDB.elements.favoritesTab().click();//navigating to favorites tab
      TMDB.elements.favoriteslist().should("contain", "TopGun:Maverick");//verifying the added movie in favorites list
    });
  });
});
