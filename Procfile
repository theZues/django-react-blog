web: python manage.py runserver 0.0.0.0:$PORT --noreload
web: gunicorn reactify.wsgi --log-file - --log-level debug