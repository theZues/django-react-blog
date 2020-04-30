release: python manage.py migrate
web: gunicorn reactify.wsgi --log-file - --log-level debug