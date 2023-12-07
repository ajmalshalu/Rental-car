from backend_api.views import RentalViewSet,ContactViewSet,StaffViewSet
from rest_framework.routers import DefaultRouter
from backend_api import views

router = DefaultRouter()
router.register(r'rental', views.RentalViewSet,basename='rental')
router.register(r'contact', views.ContactViewSet,basename='contact')
router.register(r'staff', views.StaffViewSet,basename='staff')

urlpatterns = router.urls