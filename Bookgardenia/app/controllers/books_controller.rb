class BooksController < ApplicationController
  def new
  end

  def create
    @book = Book.new(book_params)

    @book.save
    redirect_to @book
  end

  def show
    @book = Book.find(params[:id])
  end


  def index
    @books = Book.all.order('created_at DESC')
  end

  def book_params
    params.require(:book).permit(:title, :author)
  end
end
