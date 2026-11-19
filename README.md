# Auzbright

The Auzbright website and its backend, in one repository.

| Folder | What it is |
| --- | --- |
| [`frontend/`](frontend/) | The website: Next.js 16, exported as static HTML. See [`frontend/README.md`](frontend/README.md) for everything about it. |
| [`backend/`](backend/) | The staff CRM and CMS: Laravel 13 and Filament 5, including e-signature (Documents). A UI preview with sample data so far. See [`backend/README.md`](backend/README.md). |

## Run the website

```sh
cd frontend
npm install
npm run dev        # http://localhost:3000
```

Deploy the GitHub Pages preview from the same folder with `npm run deploy:preview`.

## Run the CRM preview

```sh
cd backend
composer setup
php artisan db:seed
php artisan serve  # CRM: http://localhost:8000/crm · signing page: http://localhost:8000/sign/SGN-3021
```
