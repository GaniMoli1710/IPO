from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import MyModel
import json

@csrf_exempt
def get_items(request):
    if request.method == 'GET':
        items = MyModel.objects.all().values()
        return JsonResponse(list(items), safe=False)

@csrf_exempt
def get_item(request, pk):
    if request.method == 'GET':
        try:
            item = MyModel.objects.get(pk=pk)
            return JsonResponse({
                'company_name': item.company_name,
                'open_date': item.open_date,
                'issue_size': item.issue_size,
                'listing_date': item.listing_date,
                'price_band': item.price_band,
                'close_date': item.close_date,
                'issue_type': item.issue_type,
                'status': item.status,
                'ipo_price': item.ipo_price,
                'listing_gain': item.listing_gain,
                'cmp': item.cmp,
                'rhp': item.rhp,
                'listing_price': item.listing_price,
                'listing_date_new': item.listing_date_new,
                'current_return': item.current_return,
                'drhp': item.drhp
            })
        except MyModel.DoesNotExist:
            return JsonResponse({'error': 'Item not found'}, status=404)

@csrf_exempt
def create_item(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            #Create a new item in the database
            new_item = MyModel.objects.create(
                company_name=data['company_name'],
                open_date=data['open_date'],
                issue_size=data['issue_size'],
                listing_date=data['listing_date'],
                price_band=data['price_band'],
                close_date=data['close_date'],
                issue_type=data['issue_type'],
                status=data['status'],
                ipo_price=data['ipo_price'],
                listing_gain=data['listing_gain'],
                cmp=data['cmp'],
                rhp=data['rhp'],
                listing_price=data['listing_price'],
                listing_date_new=data['listing_date_new'],
                current_return=data['current_return'],
                drhp=data['drhp']
            )
            return JsonResponse({'id': new_item.id}, status=201)
        except (KeyError, json.JSONDecodeError):
            return JsonResponse({'error': 'Invalid data'}, status=400)
        else:
            return JsonResponse({'message: Invalid request method'},status=405)

@csrf_exempt
def update_item(request, pk):
    if request.method == 'PUT':
        try:
            data = json.loads(request.body)
            item = MyModel.objects.get(pk=pk)
            item.company_name = data.get('company_name', item.company_name)
            item.open_date = data.get('open_date', item.open_date)
            item.issue_size = data.get('issue_size', item.issue_size)
            item.listing_date = data.get('listing_date', item.listing_date)
            item.price_band = data.get('price_band', item.price_band)
            item.close_date = data.get('close_date', item.close_date)
            item.issue_type = data.get('issue_type', item.issue_type)
            item.status = data.get('status', item.status)
            item.ipo_price = data.get('ipo_price', item.ipo_price)
            item.listing_gain = data.get('listing_gain', item.listing_gain)
            item.cmp = data.get('cmp', item.cmp)
            item.rhp = data.get('rhp', item.rhp)
            item.listing_price = data.get('listing_price', item.listing_price)
            item.listing_date_new = data.get('listing_date_new', item.listing_date_new)
            item.current_return = data.get('current_return', item.current_return)
            item.drhp = data.get('drhp', item.drhp)
            item.save()
            return JsonResponse({'id': item.id}, status=200)
        except MyModel.DoesNotExist:
            return JsonResponse({'error': 'Item not found'}, status=404)
        except (KeyError, json.JSONDecodeError):
            return JsonResponse({'error': 'Invalid data'}, status=400)

@csrf_exempt
def delete_item(request, pk):
    if request.method == 'DELETE':
        try:
            item = MyModel.objects.get(pk=pk)
            item.delete()
            return HttpResponse(status=204)
        except MyModel.DoesNotExist:
            return JsonResponse({'error': 'Item not found'}, status=404)
