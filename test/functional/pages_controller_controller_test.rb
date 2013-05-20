require 'test_helper'

class PagesControllerControllerTest < ActionController::TestCase
  test "should get calendar" do
    get :calendar
    assert_response :success
  end

  test "should get chart" do
    get :chart
    assert_response :success
  end

  test "should get file-manager" do
    get :file-manager
    assert_response :success
  end

  test "should get form" do
    get :form
    assert_response :success
  end

  test "should get gallery" do
    get :gallery
    assert_response :success
  end

  test "should get grid" do
    get :grid
    assert_response :success
  end

  test "should get icon" do
    get :icon
    assert_response :success
  end

  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get license" do
    get :license
    assert_response :success
  end

  test "should get login" do
    get :login
    assert_response :success
  end

  test "should get submenu" do
    get :submenu
    assert_response :success
  end

  test "should get table" do
    get :table
    assert_response :success
  end

  test "should get typography" do
    get :typography
    assert_response :success
  end

  test "should get ui" do
    get :ui
    assert_response :success
  end

end
