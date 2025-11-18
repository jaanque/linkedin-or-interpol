from playwright.sync_api import sync_playwright, expect

def run_verification(page):
    # Navigate to the game
    page.goto("http://localhost:8000")

    # Wait for the main content to be loaded
    expect(page.locator("#profile-picture")).to_be_visible()

    # Close the instructions popup to start the game
    page.locator("#play-button").click()

    # Get the initial image source to check if it changes after a wrong answer
    initial_image_src = page.locator("#profile-picture").get_attribute("src")

    # Select classic mode
    game_mode_selector = page.locator("#game-mode-selector")
    game_mode_selector.select_option("classic")

    # Get the current image's correct answer type to deliberately choose the wrong one
    current_image_type = page.evaluate("() => currentImage.type")
    wrong_answer = "interpol" if current_image_type == "linkedin" else "linkedin"

    # Click the wrong answer button
    page.locator(f"#{wrong_answer}-button").click()

    # Check if the classic mode end popup is visible
    classic_mode_end_popup = page.locator("#classic-mode-end-popup")
    expect(classic_mode_end_popup).to_be_visible()

    # Take a screenshot of the popup
    page.screenshot(path="classic_mode_popup.png")

    # Click the "Share Score" button
    page.locator("#classic-share-score-button").click()

    # The popup should still be visible after clicking "Share Score"
    expect(classic_mode_end_popup).to_be_visible()

    # Click the "Revive" button
    page.locator("#classic-revive-button").click()

    # The popup should be hidden after clicking "Revive"
    expect(classic_mode_end_popup).to_be_hidden()

    # A new image should be loaded
    expect(page.locator("#profile-picture")).not_to_have_attribute("src", initial_image_src)

    # Now, test the "Play Again" functionality
    # Make another wrong choice to bring up the popup again
    current_image_type = page.evaluate("() => currentImage.type")
    wrong_answer = "interpol" if current_image_type == "linkedin" else "linkedin"
    page.locator(f"#{wrong_answer}-button").click()
    expect(classic_mode_end_popup).to_be_visible()

    # Click the "Play Again" button
    page.locator("#classic-play-again-button").click()

    # The popup should be hidden after clicking "Play Again"
    expect(classic_mode_end_popup).to_be_hidden()

    # The score should be reset
    expect(page.locator("#score")).to_have_text("0")
    expect(page.locator("#total")).to_have_text("1")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        run_verification(page)
        browser.close()
