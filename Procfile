release: python manage.py migrate
web: python manage.py collectstatic --no-input; gunicorn reactify.wsgi --log-file -