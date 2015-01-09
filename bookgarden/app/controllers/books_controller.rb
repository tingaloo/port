class BooksController < ApplicationController

  def index
    @books = Book.all.order('created_at DESC')
  end

  def new
  end

  def create
    @book = Book.new(book_params)

    @book.save
    redirect_to books_path
  end

  def show
    @book = Book.find(params[:id])
  end

  def edit
  end

  def update
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy

    redirect_to books_path
  end


  private

  def book_params
    params.require(:book).permit(:title, :author)
  end
end
